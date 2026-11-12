const validateNewTask = (req, res, next) => {
    const { title } = req.body;

    if (typeof title !== "string" || title.trim() === ""){
        const error = new Error("title is required");
        error.status = 400;
        return next(error);
    }

    next();
}

export default { validateNewTask };