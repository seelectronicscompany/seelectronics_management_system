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
  if (task.service) {
    const sStatus = task.service.status;
    if (sStatus === "completed") return "completed";
    if (sStatus === "canceled") return "cancelled";
    if (sStatus === "appointment_retry") return "cancelled";
    if (sStatus === "pending") return "pending";
    return "in_progress";
  }
  return task.status as TaskStatus;
};

export default function TaskView() {
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
        const targetTask = selectedTask?.taskId === taskId ? selectedTask : tasks.find(t => t.taskId === taskId);
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
      <div className="grid gap-2"
      >
        {tasks.length === 0 ? (
          <div className="h-52 flex flex-col items-center justify-center text-gray-400 bg-white rounded-xl border border-dashed">
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
                "group flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3 bg-white rounded-xl border transition-all text-left",
                getVisualStatus(task) === "completed"
                  ? "border-gray-100 opacity-70"
                  : "border-brand/20 shadow-sm hover:border-brand/30",
              )}
            >
              {/* Priority */}
              {/* <div
  className={clsx(
    "shrink-0 size-10 rounded-lg flex items-center justify-center text-white self-end sm:self-auto",
    {
      "bg-blue-500": task.priority === "low",
      "bg-emerald-500": task.priority === "normal",
      "bg-orange-500": task.priority === "high",
      "bg-rose-500": task.priority === "urgent",
    },
  )}
>
  {task.priority === "urgent" ? (
    <Zap size={16} />
  ) : task.priority === "high" ? (
    <AlertTriangle size={16} />
  ) : (
    <Wrench size={16} />
  )}
</div> */}

              {/* Content */}
              <div className="flex-1 min-w-0 space-y-0.5"
              >
                <div className="flex items-center gap-2">
                  <h3 className="text-sm font-semibold text-gray-900
               truncate uppercase">
                    {task.staff?.name} নতুন {task.title} আসছে

                  </h3>

                  <div className="hidden sm:flex items-center gap-2">
                    <span
                      className={clsx(
                        "px-2 py-1 rounded text-[13px] font-bold uppercase",
                        {
                          "bg-gray-100 text-gray-500":
                            getVisualStatus(task) === "pending",
                          "bg-blue-100 text-blue-600":
                            getVisualStatus(task) === "in_progress",
                          "bg-emerald-100 text-emerald-600":
                            getVisualStatus(task) === "completed",
                          "bg-rose-100 text-rose-600":
                            getVisualStatus(task) === "cancelled",
                        },
                      )}
                    >
                      {getVisualStatus(task).replace("_", " ")}
                    </span>

                    {!readTasks.includes(task.taskId) && (
                      <span className="text-[13px] font-bold uppercase px-2 py-1 rounded bg-red-100 text-red-600">
                        NEW
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-[15px] text-gray-500 line-clamp-3 sm:line-clamp-2 font-medium">
                  {task.description}
                </p>

                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                  <div className="flex items-center gap-1 text-[12px] font-bold text-gray-400">
                    <Calendar size={10} />
                    {task.dueDate
                      ? formatDate(task.dueDate)
                      : "No Deadline"}
                  </div>
                  <div className="flex items-center gap-1 text-[12px] font-bold text-gray-400">
                    <Clock size={10} />
                    {formatDate(task.createdAt)}
                  </div>
                </div>
              </div>

              {/* Arrow */}

              <div className="hidden sm:flex shrink-0 px-2 py-1 rounded border  bg-emerald-100 border-emerald-600 font-bold text-[13px] text-emerald-700 uppercase transition-all">
                details
              </div>
              <div className="flex sm:hidden items-center justify-between mt-2">

                {/* LEFT: status + NEW */}
                <div className="flex items-center gap-2">
                  <span
                    className={clsx(
                      "px-2 py-1 rounded text-[13px] font-bold uppercase",
                      {
                        "bg-gray-100 text-gray-500":
                          getVisualStatus(task) === "pending",
                        "bg-blue-100 text-blue-600":
                          getVisualStatus(task) === "in_progress",
                        "bg-emerald-100 text-emerald-600":
                          getVisualStatus(task) === "completed",
                        "bg-rose-100 text-rose-600":
                          getVisualStatus(task) === "cancelled",
                      },
                    )}
                  >
                    {getVisualStatus(task).replace("_", " ")}
                  </span>

                  {!readTasks.includes(task.taskId) && (
                    <span className="text-[13px] font-bold uppercase px-2 py-1 rounded bg-red-100 text-red-600">
                      NEW
                    </span>
                  )}
                </div>

                {/* RIGHT: details */}
                <div className="px-2 mx-2 font-bold uppercase py-1 rounded border border-emerald-600  bg-emerald-100  text-[13px] text-emerald-700 ">
                  details
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-md bg-gray-50 border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  Assigned Date
                </p>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Calendar size={16} className="text-brand" />
                  {formatDate(selectedTask.createdAt)}
                </div>
              </div>
              <div className="p-4 rounded-md bg-gray-50 border border-gray-100">
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-1">
                  Due Date
                </p>
                <div className="flex items-center gap-2 font-bold text-gray-900">
                  <Clock size={16} className="text-brand" />
                  {selectedTask.dueDate
                    ? formatDate(selectedTask.dueDate)
                    : "No Deadline"}
                </div>
              </div>
            </div>

            {/* Description */}
            <div className="space-y-3">
              <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                <FileText size={14} className="text-brand" />
                Task Description
              </h4>
              <div className="p-6 bg-white rounded-[2rem]  border border-gray-100 shadow-sm min-h-32 text-gray-700 leading-relaxed text-[17px] font-medium whitespace-pre-wrap">
                {selectedTask.description}
              </div>
            </div>

            {/* Attachments (Placeholder for now) */}
            {selectedTask.files && selectedTask.files.length > 0 && (
              <div className="space-y-3 ">
                <h4 className="text-xs font-black text-gray-400 uppercase tracking-[0.2em] flex items-center gap-2">
                  <FileText size={14} className="text-brand" />
                  Associated Files
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedTask.files.map((file, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-md bg-gray-50 border border-gray-100 flex items-center justify-between group hover:bg-white hover:border-brand/20 transition-all"
                    >
                      <div className="flex items-center gap-3">
                        <div className="size-8 rounded-md bg-brand/10 flex items-center justify-center text-brand">
                          <FileText size={16} />
                        </div>
                        <span className="text-xs font-bold text-gray-600 truncate max-w-[150px]">
                          File_{idx + 1}
                        </span>
                      </div>
                      <button className="text-[10px] font-black uppercase text-brand tracking-widest opacity-0 group-hover:opacity-100 transition-all">
                        View
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-gray-100 flex flex-wrap gap-3">
              {(getVisualStatus(selectedTask) === "pending" || getVisualStatus(selectedTask) === "in_progress") && (
                <button
                  disabled={isUpdatingStatus}
                  onClick={() => {
                    if (getVisualStatus(selectedTask) === "pending") {
                      handleStatusUpdate(selectedTask.taskId, "in_progress");
                    } else if (selectedTask.serviceId) {
                      router.push(`/service-report?serviceId=${selectedTask.serviceId}`);
                    }
                  }}
                  className="flex-1 min-w-[140px] py-4 rounded-md bg-blue-600 text-white font-black uppercase tracking-widest text-xs hover:bg-blue-700 transition-all shadow-lg shadow-blue-100 flex items-center justify-center gap-2"
                >
                  {isUpdatingStatus ? (
                    <Spinner />
                  ) : getVisualStatus(selectedTask) === "pending" ? (
                    <>
                      <PlayCircle size={18} />
                      Start Task
                    </>
                  ) : (
                    <>
                      <FileText size={18} />
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
                    className="py-4 px-6 rounded-md bg-gray-100 text-gray-500 font-black uppercase tracking-widest text-xs hover:bg-rose-50 hover:text-rose-600 transition-all flex items-center justify-center gap-2"
                  >
                    {isUpdatingStatus ? <Spinner /> : <XCircle size={18} />}
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