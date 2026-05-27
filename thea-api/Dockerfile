FROM eclipse-temurin:21-jre-alpine

# Patch OS packages (e.g. libpng CVE-2026-40930) on top of the base image.
RUN apk update && apk upgrade --no-cache

RUN adduser --disabled-password ctg
RUN mkdir /app
RUN chown ctg /app
USER ctg

COPY build/libs/thea-api.jar /app/thea-api.jar

EXPOSE 8080
ENTRYPOINT ["java", "-jar", "/app/thea-api.jar"]
