import mongoose, { Model, Types } from 'mongoose';

interface TSubtask {
  title: string;
  isCompleted: boolean;
}

interface TTask {
  _id: string;
  title: string;
  description: string;
  status: string;
  subtasks: TSubtask[];
}

type TaskDocumentProps = {
  subtasks: Types.DocumentArray<TSubtask>;
};

type TaskModelType = Model<TTask, {}, TaskDocumentProps>;

const subtaskSchema = new mongoose.Schema({
  title: {
    type: 'String',
    maxLength: 100,
    required: true,
    trim: true,
  },
  isCompleted: { type: 'Boolean', required: true, default: false },
});

const taskSchema = new mongoose.Schema<TTask, TaskModelType>({
  title: {
    type: 'String',
    maxLength: 100,
    required: true,
    trim: true,
  },
  description: { type: 'String', maxLength: 280, trim: true },
  status: { type: 'String', required: true },
  subtasks: [{ type: subtaskSchema, required: false }],
});

// const Task = mongoose.model<TTask>('Task', taskSchema);

// export { Task, taskSchema, TTask };
export { taskSchema, TTask, TaskModelType };
