# Usar a imagem node:16.14-alpine como base
FROM node:18.18.0-alpine

# Mudar para o diretório de trabalho /app-backend
WORKDIR /backend

# Copiar os package.json e package-lock.json para o container
COPY package*.json .

# Instalar as dependências Node
RUN npm install

# Copiar o restante dos arquivos da aplicação para o container
COPY . .

# Sinalize que aplicação expõe a porta 3001
EXPOSE 3001

# Configurar os comandos para iniciar a aplicação de acordo com as boas práticas
# Dica: Leia a seção Docker e Docker-compose no README para mais informações
ENTRYPOINT [ "npm", "run" ]

CMD [ "dev" ]