FROM public.ecr.aws/lambda/nodejs:14

COPY handler.js package*.json config ${LAMBDA_TASK_ROOT}

RUN npm ci

CMD ["handler.handler"]
