import express from 'express';
import { forgottenPassword, resetPassword } from '../../controllers/ResetPasswordController/resetController';
export const resetPasswordRouter = express.Router();

resetPasswordRouter.post('/forgotten-password', forgottenPassword);
resetPasswordRouter.put('/reset-password', resetPassword);