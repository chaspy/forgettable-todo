FROM ruby:2.7.3

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list

RUN apt-get update -qq && \
    apt-get install -y --no-install-recommends \
      nodejs \
      postgresql-client \
      yarn

RUN mkdir /myapp
WORKDIR /myapp

COPY Gemfile /myapp
COPY Gemfile.lock /myapp

RUN bundle install

COPY package.json /myapp
COPY yarn.lock /myapp

RUN yarn install

COPY . /myapp

# Add a script to be executed every time the container starts.
COPY ./entrypoint.sh /usr/bin/
RUN chmod +x /usr/bin/entrypoint.sh
ENTRYPOINT ["entrypoint.sh"]

# Start the main process.
CMD ["rails", "server", "-b", "0.0.0.0"]
