FROM node:18

WORKDIR /app

# Copie os arquivos de configuração do npm com as permissões corretas
COPY --chown=node:node package*.json ./

# Mude para o usuário node
USER node

# Instale as dependências
RUN npm install

# Copie o restante dos arquivos com as permissões corretas
COPY --chown=node:node . .

EXPOSE 3000

CMD ["npm", "start"]