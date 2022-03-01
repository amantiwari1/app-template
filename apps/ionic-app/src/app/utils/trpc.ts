import { createReactQueryHooks } from '@trpc/react';
import type { AppRouter } from 'apps/backend/src/app/router';

export const trpc = createReactQueryHooks<AppRouter>();