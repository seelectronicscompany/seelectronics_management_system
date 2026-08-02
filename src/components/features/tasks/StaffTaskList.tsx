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
    <div className="space-y-4 pb-28">
      {/* Header */}
      <div className="flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-100 shadow-sm">
        <div className="size-10 rounded-xl bg-brand/5 flex items-center justify-center">
          <ListTodo size={20} className="text-brand stroke-[2.5]" />
        </div>
        <div>
          <h2 className="text-lg font-extrabold text-slate-800 uppercase tracking-wide">Assigned Tasks</h2>
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
            {pendingCount} Pending Tasks Assigned to You
          </p>
        </div>
      </div>

      {/* Task List */}
      <div className="grid gap-4 w-full">
        {tasks.length === 0 ? (
          <div className="h-56 flex flex-col items-center justify-center text-slate-400 bg-white rounded-3xl border border-slate-100 p-6 shadow-sm">
            <div className="size-16 rounded-2xl bg-slate-50 flex items-center justify-center mb-4 border border-slate-100">
              <Inbox size={28} className="text-slate-300" />
            </div>
            <p className="text-sm font-extrabold uppercase text-slate-700">No tasks assigned</p>
            <p className="text-xs text-slate-400 mt-1 max-w-xs text-center font-bold">
              Check back later for any tasks or tickets.
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
                "group w-full flex flex-col gap-3.5 p-5 bg-white rounded-2xl border transition-all text-left shadow-sm hover:shadow-md",
                getVisualStatus(task) === "completed"
                  ? "border-slate-100 opacity-70"
                  : "border-slate-100 hover:border-brand/20",
              )}
            >
              {/* Header Info: Title & Badges */}
              <div className="flex flex-col gap-2 w-full">
                <div className="flex flex-wrap items-center justify-between gap-2 w-full">
                  <div className="flex flex-wrap items-center gap-2 max-w-full">
                    <span
                      className={clsx(
                        "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider border",
                        {
                          "bg-slate-50 text-slate-600 border-slate-200":
                            getVisualStatus(task) === "pending",
                          "bg-blue-50 text-blue-700 border-blue-100":
                            getVisualStatus(task) === "in_progress",
                          "bg-emerald-50 text-emerald-700 border-emerald-100":
                            getVisualStatus(task) === "completed",
                          "bg-rose-50 text-rose-700 border-rose-100":
                            getVisualStatus(task) === "cancelled",
                        },
                      )}
                    >
                      {getVisualStatus(task).replace("_", " ")}
                    </span>

                    {!readTasks.includes(task.taskId) && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded-full bg-rose-100 text-rose-600 animate-pulse tracking-wider">
                        NEW SERVICE
                      </span>
                    )}
                  </div>

                  <span className="shrink-0 px-2.5 py-1 rounded-lg border border-slate-200 bg-slate-50 font-black text-[9px] text-slate-500 uppercase group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-all duration-200">
                    details
                  </span>
                </div>

                <h3 className="text-base font-black text-slate-800 break-words leading-tight">
                  {task.staff?.name ? `${task.staff.name} - ` : ""}
                  {task.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-xs text-slate-500 line-clamp-2 break-words font-medium">
                {task.description}
              </p>

              {/* Footer Meta */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-3 border-t border-slate-50 w-full text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                <div className="flex items-center gap-1.5 min-w-0">
                  <Calendar size={13} className="shrink-0 text-slate-400" />
                  <span className="truncate">
                    Due:{" "}
                    {task.dueDate ? formatDate(task.dueDate) : "No Deadline"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 min-w-0">
                  <Clock size={13} className="shrink-0 text-slate-400" />
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
        width="650"
      >
        {selectedTask && (
          <div className="space-y-6 p-2 text-slate-700">
            {/* Header Section */}
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span
                    className={clsx(
                      "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider shadow-sm text-white",
                      {
                        "bg-blue-500": selectedTask.priority === "low",
                        "bg-emerald-500": selectedTask.priority === "normal",
                        "bg-orange-500": selectedTask.priority === "high",
                        "bg-rose-500": selectedTask.priority === "urgent",
                      },
                    )}
                  >
                    {selectedTask.priority} Priority
                  </span>
                  <span
                    className={clsx(
                      "px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-slate-100 text-slate-600 border border-slate-200",
                    )}
                  >
                    {getVisualStatus(selectedTask).replace("_", " ")}
                  </span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-800 tracking-tight leading-tight uppercase">
                  {selectedTask.title}
                </h2>
              </div>
            </div>

            {/* Main Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                  Assigned Date
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
                  <Calendar size={14} className="text-brand shrink-0" />
                  <span className="truncate">
                    {formatDate(selectedTask.createdAt)}
                  </span>
                </div>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex flex-col gap-1">
                <p className="text-[9px] font-black text-slate-400 uppercase tracking-wider">
                  Due Date
                </p>
                <div className="flex items-center gap-2 text-xs font-bold text-slate-700">
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
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                <FileText size={13} className="text-brand shrink-0" />
                Task Description
              </h4>
              <div className="p-4 bg-slate-50/50 rounded-2xl border border-slate-100/80 min-h-24 text-slate-600 leading-relaxed text-xs sm:text-sm font-medium whitespace-pre-wrap break-words">
                {selectedTask.description}
              </div>
            </div>

            {/* Attachments */}
            {selectedTask.files && selectedTask.files.length > 0 && (
              <div className="space-y-2">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-wider flex items-center gap-1.5">
                  <FileText size={13} className="text-brand shrink-0" />
                  Associated Files
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {selectedTask.files.map((file, idx) => (
                    <div
                      key={idx}
                      className="p-2.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between group hover:bg-white hover:border-brand/20 transition-all text-xs"
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <div className="size-8 rounded-lg bg-brand/5 flex items-center justify-center text-brand shrink-0 border border-brand/5">
                          <FileText size={14} />
                        </div>
                        <span className="font-extrabold text-slate-600 truncate">
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

            <div className="pt-4 border-t border-slate-100 flex flex-wrap gap-2">
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
                  className="flex-1 min-w-[120px] py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-wider text-[10px] sm:text-xs transition-all flex items-center justify-center gap-2 shadow-sm shadow-blue-100"
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
                    className="py-3.5 px-5 rounded-xl bg-slate-50 hover:bg-rose-50 hover:text-rose-600 border border-slate-100 hover:border-rose-100 text-slate-500 font-black uppercase tracking-wider text-[10px] sm:text-xs transition-all flex items-center justify-center gap-2"
                  >
                    {isUpdatingStatus ? <Spinner /> : <XCircle size={16} />}
                    Cancel Task
                  </button>
                )}
            </div>
          </div>
        )}
      </Modal>
    </div>
  );
}
