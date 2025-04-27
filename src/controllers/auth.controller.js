import catchAsync from "../utils/catchAsync.js";

export const register = catchAsync((req, res) => {
    console.log(req.body);
})