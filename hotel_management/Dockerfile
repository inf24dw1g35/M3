FROM node:18

# Defina um usuário não-root
USER node

# Crie o diretório da aplicação com o usuário `node`
RUN mkdir -p /home/node/app

WORKDIR /home/node/app

# Copie os arquivos de dependências
COPY --chown=node package*.json ./

# Instale as dependências
RUN npm install

# Copie o código-fonte da aplicação
COPY --chown=node . .

# Copie o script wait-for-it.sh
COPY --chown=node wait-for-it.sh /home/node/app/wait-for-it.sh

# Torne o script executável
RUN chmod +x /home/node/app/wait-for-it.sh

# Compile a aplicação (se necessário)
RUN npm run build

# Defina as variáveis de ambiente
ENV HOST=0.0.0.0
ENV PORT=3000

# Exponha a porta da aplicação
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["./wait-for-it.sh", "mysql:3306", "--", "npm", "start"]