"use client";

import { getStaffTasks, updateTaskStatus } from "@/actions/taskActions";
import { Spinner, Modal } from "@/components/ui";
import { TaskType, TaskStatus } from "@/types";
import { formatDate } from "@/utils";
import { useState, useEffect } from "react";
import {
  ListTodo,
  ChevronRight,
  Info,
  AlertTriangle,
  Zap,
  Calendar,
  Clock,
  Inbox,
  PlayCircle,
  CheckCircle,
  XCircle,
  FileText,
  Bell,
  Wrench,
} from "lucide-react";
import { toast } from "react-toastify";
import clsx from "clsx";
import { useRouter } from "next/navigation";

const getVisualStatus = (task: any): TaskStatus => {
  const tStatus = task.status as TaskStatus;
  if (!task.service) return tStatus;

  const sStatus = task.service.status;
  if (sStatus === "completed") return "completed";
  if (sStatus === "canceled" || sStatus === "appointment_retry")
    return "cancelled";

  // Respect the task's own status (pending/in_progress) while the service is active
  return tStatus;
};

export default function StaffTaskList() {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedTask, setSelectedTask] = useState<TaskType | null>(null);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const router = useRouter();
  const [readTasks, setReadTasks] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      return JSON.parse(localStorage.getItem("readTasks") || "[]");
    }
    return [];
  });
  const fetchData = async () => {
    setIsLoading(true);
    const res = await getStaffTasks();
    if (res.success) setTasks(res.data as any);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleMarkAsRead = (taskId: string) => {
    setReadTasks((prev) => {
      if (prev.includes(taskId)) return prev; // duplicate prevent
      const updated = [...prev, taskId];
      localStorage.setItem("readTasks", JSON.stringify(updated));
      return updated;
    });
  };
  const handleStatusUpdate = async (taskId: string, newStatus: TaskStatus) => {
    setIsUpdatingStatus(true);
    const res = await updateTaskStatus(taskId, newStatus);
    if (res.success) {
      toast.success(res.message);
      setTasks((prev) =>
        prev.map((t) =>
          t.taskId === taskId ? { ...t, status: newStatus } : t,
        ),
      );

      // Redirect to report page if starting a service task
      if (newStatus === "in_progress" && (selectedTask?.serviceId || taskId)) {
        const targetTask =
          selectedTask?.taskId === taskId
            ? selectedTask
            : tasks.find((t) => t.taskId === taskId);
        if (targetTask?.serviceId) {
          router.push(`/service-report?serviceId=${targetTask.serviceId}`);
          return;
        }
      }

      if (selectedTask?.taskId === taskId) {
        setSelectedTask((prev) =>
          prev ? { ...prev, status: newStatus } : null,
        );
      }
    } else {
      toast.error(res.message);
    }
    setIsUpdatingStatus(false);
  };

  if (isLoading)
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner />
      </div>
    );

  const pendingCount = tasks.filter((t) => t.status === "pending").length;

  return (
    <div className="space-y-3">
      {/* Header */}
      <div className="flex items-center gap-2 bg-white p-3 rounded-xl border border-gray-100 shadow-sm">
        <div className="size-9 rounded-md bg-brand/5 flex items-center justify-center">
          <ListTodo size={18} className="text-brand" />
        </div>
        <div>
          <h2 className="text-lg font-bold text-gray-900">Assigned Tasks</h2>
          <p className="text-[10px] font-bold text-gray-400 uppercase">
            {pendingCount} Pending Tasks
          </p>
        </div>
      </div>

      {/* Task List */}
      <div className="grid gap-3 w-full">
        {tasks.length === 0 ? (
          <div className="h-52 flex flex-col items-center justify-center text-gray-400 bg-white rounded-xl border border-dashed p-4">
            <Inbox size={32} />
            <p className="text-xs font-bold uppercase mt-1">
              No tasks assigned
            </p>
          </div>
        ) : (
          tasks.map((task) => (
            <button
              key={task.taskId}
              onClick={() => {
                handleMarkAsRead(task.taskId);
                setSelectedTask(task);
              }}
              className={clsx(
                "group w-full flex flex-col gap-3 p-4 bg-white rounded-xl border transition-all text-left shadow-sm hover:shadow-md",
                getVisualStatus(task) === "completed"
                  ? "border-gray-100 opacity-70"
                  : "border-brand/25 hover:border-brand/45",
              )}
            >
              {/* Header Info: Title & Badges */}
              <div className="flex flex-col gap-1.5 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                  <div className="flex flex-wrap items-center gap-2 max-w-full">
                    <span
                      className={clsx(
                        "px-2 py-0.5 rounded text-[11px] font-bold uppercase tracking-wider",
                        {
                          "bg-gray-100 text-gray-600":
                            getVisualStatus(task) === "pending",
                          "bg-blue-100 text-blue-700":
                            getVisualStatus(task) === "in_progress",
                          "bg-emerald-100 text-emerald-700":
                            getVisualStatus(task) === "completed",
                          "bg-rose-100 text-rose-700":
                            getVisualStatus(task) === "cancelled",
                        },
                      )}
                    >
                      {getVisualStatus(task).replace("_", " ")}
                    </span>

                    {!readTasks.includes(task.taskId) && (
                      <span className="text-[11px] font-bold uppercase px-2 py-0.5 rounded bg-red-100 text-red-600 animate-pulse">
                        NEW SERVICE
                      </span>
                    )}
                  </div>

                  <span className="shrink-0 px-2.5 py-1 rounded-md border border-emerald-600 bg-emerald-50 font-bold text-[11px] text-emerald-700 uppercase group-hover:bg-emerald-100 transition-colors">
                    details
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-gray-900 break-words leading-snug">
                  {task.staff?.name ? `${task.staff.name} - ` : ""}
                  {task.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm text-gray-500 line-clamp-2 break-words">
                {task.description}
              </p>

              {/* Footer Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-gray-50 w-full text-[11px] font-bold text-gray-400">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Calendar size={12} className="shrink-0 text-gray-400" />
                  <span className="truncate">
                    Due:{" "}
                    {task.dueDate ? formatDate(task.dueDate) : "No Deadline"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 min-w-0">
                  <Clock size={12} className="shrink-0 text-gray-400" />
                  <span className="truncate">
                    Assigned: {formatDate(task.createdAt)}
                  </span>
                </div>
              </div>
            </button>
          ))
        )}
      </div>

      {/* Modal */}
      <Modal
        isVisible={!!selectedTask}
        onClose={() => setSelectedTask(null)}
        title="Task Details"
        width="700"
      >
        {selectedTask && (
          <div className="space-y-8 p-1">
            {/* Header Section */}
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-md text-xs font-black uppercase tracking-[0.2em] shadow-sm",
                      {
                        "bg-blue-500 text-white":
                          selectedTask.priority === "low",
                        "bg-emerald-500 text-white":
                          selectedTask.priority === "normal",
                        "bg-orange-500 text-white":
                          selectedTask.priority === "high",
                        "bg-rose-500 text-white":
                          selectedTask.priority === "urgent",
                      },
                    )}
                  >
                    {selectedTask.priority} Priority
                  </span>
                  <span
                    className={clsx(
                      "px-3 py-1 rounded-md text-xs font-black uppercase tracking-[0.2em] bg-gray-100 text-gray-600",
                    )}
                  >
                    {getVisualStatus(selectedTask).replace("_", " ")}
                  </span>
                </div>
                <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-tight uppercase">
                  {selectedTask.title}
                </h2>
              </div>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3 rounded-md bg-gray-50 border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">
                  Assigned Date
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                  <Calendar size={14} className="text-brand shrink-0" />
                  <span className="truncate">
                    {formatDate(selectedTask.createdAt)}
                  </span>
                </div>
              </div>
              <div className="p-3 rounded-md bg-gray-50 border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">
                  Due Date
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-gray-900">
                  <Clock size={14} className="text-brand shrink-0" />
                  <span className="truncate">
                    {selectedTask.dueDate
                      ? formatDate(selectedTask.dueDate)
                      : "No Deadline"}
                  </span>
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-2">
              <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                <FileText size={12} className="text-brand shrink-0" />
                Task Description
              </h4>
              <div className="p-4 bg-white rounded-xl border border-gray-100 shadow-sm min-h-24 text-gray-700 leading-relaxed text-xs sm:text-sm font-medium whitespace-pre-wrap break-words">
                {selectedTask.description}
              </div>
            </div>

            {/* Attachments (Placeholder for now) */}
            {selectedTask.files && selectedTask.files.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-gray-400 uppercase tracking-widest flex items-center gap-2">
                  <FileText size={12} className="text-brand shrink-0" />
                  Associated Files
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTask.files.map((file, idx) => (
                    <div
                      key={idx}
                      className="p-2 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-between group hover:bg-white hover:border-brand/20 transition-all text-xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="size-7 rounded bg-brand/10 flex items-center justify-center text-brand shrink-0">
                          <FileText size={14} />
                        </div>
                        <span className="font-bold text-gray-600 truncate max-w-[120px]">
                          File_{idx + 1}
                        </span>
                      </div>
                      <button className="text-[10px] font-black uppercase text-brand tracking-widest opacity-0 group-hover:opacity-100 transition-all ml-2 shrink-0">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-gray-100 flex flex-wrap gap-2">
              {(getVisualStatus(selectedTask) === "pending" ||
                getVisualStatus(selectedTask) === "in_progress") && (
                <button
                  disabled={isUpdatingStatus}
                  onClick={() => {
                    if (getVisualStatus(selectedTask) === "pending") {
                      handleStatusUpdate(selectedTask.taskId, "in_progress");
                    } else if (selectedTask.serviceId) {
                      router.push(
                        `/service-report?serviceId=${selectedTask.serviceId}`,
                      );
                    }
                  }}
                  className="flex-1 min-w-[120px] py-3 rounded-md bg-blue-600 text-white font-black uppercase tracking-wider text-[10px] sm:text-xs hover:bg-blue-700 transition-all shadow-md shadow-blue-100 flex items-center justify-center gap-2"
                >
                  {isUpdatingStatus ? (
                    <Spinner />
                  ) : getVisualStatus(selectedTask) === "pending" ? (
                    <>
                      <PlayCircle size={16} />
                      Start Task
                    </>
                  ) : (
                    <>
                      <FileText size={16} />
                      Open Report
                    </>
                  )}
                </button>
              )}
              {getVisualStatus(selectedTask) !== "completed" &&
                getVisualStatus(selectedTask) !== "cancelled" && (
                  <button
                    disabled={isUpdatingStatus}
                    onClick={() =>
                      handleStatusUpdate(selectedTask.taskId, "cancelled")
                    }
                    className="py-3 px-4 rounded-md bg-gray-100 text-gray-500 font-black uppercase tracking-wider text-[10px] sm:text-xs hover:bg-rose-50 hover:text-rose-600 transition-all flex items-center justify-center gap-2"
                  >
                    {isUpdatingStatus ? <Spinner /> : <XCircle size={16} />}
                    Cancel
                  </button>
                )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
