FROM maven:3.9.6-eclipse-temurin-21 AS build

WORKDIR /app

COPY pom.xml .
RUN mvn dependency:go-offline -q

COPY src ./src

RUN mvn clean package -Dmaven.test.skip=true -q

FROM eclipse-temurin:21-jre-alpine

WORKDIR /app

COPY --from=build /app/target/discovery-0.0.1-SNAPSHOT.jar app.jar

RUN echo '#!/bin/sh' > /app/entrypoint.sh && \
    echo 'exec java -Xmx256m -Xms128m -Dserver.port=${PORT:-8080} -jar /app/app.jar' >> /app/entrypoint.sh && \
    chmod +x /app/entrypoint.sh

EXPOSE 8080

ENTRYPOINT ["/app/entrypoint.sh"]