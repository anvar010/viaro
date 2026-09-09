import { z } from 'zod';

/**
 * Self-service registration is deliberately NOT `ROLES`.
 *
 * `admin` and `company` are privileged: an admin token passes every /admin/* guard, and a
 * company owns a driver roster and a wallet. Accepting either here let anyone mint
 * themselves those powers with one unauthenticated POST. Those accounts are created by
 * seeding or by an admin, never by the public endpoint.
 */
export const PUBLIC_REGISTER_ROLES = ['customer', 'driver'] as const;

export const registerSchema = z
  .object({
    role: z.enum(PUBLIC_REGISTER_ROLES),
    name: z.string().min(2).max(120),
    email: z.string().email().toLowerCase(),
    phone: z.string().min(6).max(30),
    password: z.string().min(8, 'Password must be at least 8 characters').max(128),
    // Driver-only fields
    vehicleClass: z.string().min(1).max(60).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.role === 'driver' && !data.vehicleClass) {
      ctx.addIssue({
        code: 'custom',
        path: ['vehicleClass'],
        message: 'vehicleClass is required when registering as a driver',
      });
    }
  });

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email().toLowerCase(),
  password: z.string().min(1),
});

export type LoginInput = z.infer<typeof loginSchema>;

export const refreshSchema = z.object({
  refreshToken: z.string().min(10),
});

export type RefreshInput = z.infer<typeof refreshSchema>;

export const logoutSchema = z.object({
  refreshToken: z.string().min(10),
});

export type LogoutInput = z.infer<typeof logoutSchema>;

export const verifyPhoneSchema = z.object({
  code: z.string().regex(/^\d{6}$/, 'Enter the 6-digit code'),
});

export type VerifyPhoneInput = z.infer<typeof verifyPhoneSchema>;

export const forgotPasswordSchema = z.object({
  email: z.string().email().toLowerCase(),
});

export type ForgotPasswordInput = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z.object({
  token: z.string().min(20),
  password: z.string().min(8, 'Password must be at least 8 characters').max(128),
});

export type ResetPasswordInput = z.infer<typeof resetPasswordSchema>;
