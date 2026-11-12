
const tasks = [
    {id: "1", title: "Take a shower", status: "false"},
    {id: "2", title: "Get wingstop for dinner", status: "false"},
    {id: "3", title: "Work on the project for 3330", status: "true"},
];


const getTasks = () => {
    return tasks;
}

const createTask = (data) => {
    const nextId = tasks.length ? Math.max(...tasks.map((t) => t.id)) + 1 : 1;

    const newTask = {
        id: nextId,
        title: data.title.trim(),
        completed: false
    };

    tasks.push(newTask);
    return newTask;
}

export default {
    getTasks,
    createTask
};