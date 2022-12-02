// const initialData = {
//   tasks: {
//     'task-1': { id: 'task-1', content: 'Take out the garbage' },
//     'task-2': { id: 'task-2', content: 'Watch my favorite show' },
//     'task-3': { id: 'task-3', content: 'Charge my phone' },
//     'task-4': { id: 'task-4', content: 'Cook dinner' },
//     'task-5': { id: 'task-5', content: '5555555' },
//     'task-6': { id: 'task-6', content: '6666' },
//     'task-7': { id: 'task-7', content: '7777' },
//   },
//   columns: {
//     'Queue': {
//       id: 'Queue',
//       title: 'Queue',
//       taskIds: ['task-1', 'task-2', 'task-3'],
//     },
//     'Development': {
//       id: 'Development',
//       title: 'Development',
//       taskIds: ['task-4', 'task-5'],
//     },
//     'Done': {
//       id: 'Done',
//       title: 'Done',
//       taskIds: ['task-6', 'task-7'],
//     },
//   },
//   // Facilitate reordering of the columns
//   columnOrder: ['Queue', 'Development', 'Done'],
// };



export const initialData = {
  tasks: {
    // 'task-1': { id: 'task-1', content: 'Take out the garbage' },
    // 'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    // 'task-3': { id: 'task-3', content: 'Charge my phone' },
    // 'task-4': { id: 'task-4', content: 'Cook dinner' },
    // 'task-5': { id: 'task-5', content: '5555555' },
    // 'task-6': { id: 'task-6', content: '6666' },
    // 'task-7': { id: 'task-7', content: '7777' },
  },
  columns: {
    'Queue': {
      id: 'Queue',
      title: 'Queue',
      taskIds: [],
    },
    'Development': {
      id: 'Development',
      title: 'Development',
      taskIds: [],
    },
    'Done': {
      id: 'Done',
      title: 'Done',
      taskIds: [],
    },
  },
  // Facilitate reordering of the columns
  columnOrder: ['Queue', 'Development', 'Done'],
};

export default initialData;

