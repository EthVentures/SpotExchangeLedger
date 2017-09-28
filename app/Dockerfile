FROM netizy/ionic-2

WORKDIR /app

COPY package.json /app

RUN npm install

COPY . /app

CMD ionic serve --port 8888
