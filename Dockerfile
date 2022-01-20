FROM public.ecr.aws/lambda/nodejs:14

COPY handler.js config package*.json ${LAMBDA_TASK_ROOT}

RUN npm ci

COPY config ${LAMBDA_TASK_ROOT}/config

CMD ["handler.mail"]
