FROM mysql:latest


ENV MYSQL_ROOT_PASSWORD=password

EXPOSE 3306 

COPY ./short_course_db.sql /docker-entrypoint-initdb.d/

