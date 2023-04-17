FROM ruby:3.0.3
RUN apt-get update -qq && apt-get install -y build-essential libpq-dev nodejs
RUN mkdir /todo_app
WORKDIR /todo_app
COPY Gemfile /todo_app/Gemfile
COPY Gemfile.lock /todo_app/Gemfile.lock
RUN bundle install
