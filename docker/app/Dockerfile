FROM ruby:2.5.1

RUN apt-get update \
    && apt-get -y install curl wget git ssh


RUN apt-get update \
    && apt-get -y install nodejs



# 2: We'll set the application path as the working directory
WORKDIR /usr/src/app

# 3: We'll set the working dir as HOME and add the app's binaries path to $PATH:
ENV HOME=/usr/src/app PATH=/usr/src/app/bin:$PATH

# 4: Expose the app web port:
EXPOSE 3000






# 7: Install the current project gems - they can be safely changed later during
# development via `bundle install` or `bundle update`:
ADD Gemfile* /usr/src/app/
RUN set -ex && bundle --retry 3
