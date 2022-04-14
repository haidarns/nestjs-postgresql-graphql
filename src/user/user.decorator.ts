import {
  createParamDecorator,
  ExecutionContext,
  SetMetadata,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const IS_PUBLIC_KEY = 'isPublic';
/**
 * This decorator indicate resolver is accessible for Public / Anonymous
 */
export const Public = () => SetMetadata(IS_PUBLIC_KEY, true);

/**
 * This decorator provide jwt user payload
 */
export const User = createParamDecorator(
  (data: unknown, ctx: ExecutionContext) => {
    const context = GqlExecutionContext.create(ctx).getContext();
    return context.req.user;
  },
);
