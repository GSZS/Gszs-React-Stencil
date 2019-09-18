# Stage-1

# 基础镜像 - NodeImages
FROM node:latest as build-deps

# Set the working directory to /app
WORKDIR /usr/src/app

# 复制package.json yarn.lock到工作目录
COPY package.json yarn.lock ./

# 运行
RUN yarn

# 全部复制
COPY . ./

# build
RUN yarn build

# Stage - 2

# 基础镜像 - Nginx
FROM nginx:1.12-alpine

# 将第一阶段生成的build拷贝到Nginx上
COPY --from=build-deps /usr/src/app/build /usr/share/nginx/html

# 设置80端口为公开端口,并启动服务器
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
