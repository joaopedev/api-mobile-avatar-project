import exp from "constants";

export enum HTTP_ERRORS {
  SUCESSO = 200, // Sucesso na criação do cadastro
  BAD_REQUEST = 400, // Dados inválidos
  ACESSO_NAO_AUTORIZADO = 401, // Não autorizado para criar cadastro
  ROTA_NAO_ENCONTRADA = 404, // Rota não encontrada
  ERRO_INTERNO = 500, // Erro interno do servidor
  ERRO_API_EXTERNA = 403, // Erro ao realizar uma solicitação externa
  DUPLICACAO_DE_DADOS = 409, // Cadastro duplicado
  LIMITE_DE_USO_EXCEDIDO = 429, // Limite de uso excedido
  VALIDACAO_DE_DADOS = 422, // Falha na validação de dados
  REGISTRO_NAO_ENCONTRADO = 404, // Registro não encontrado (caso específico)
  OUTRO_ERRO = 550, // Outro erro não mapeado
}

export interface UserModel {
  id?: string;
  name?: string;
  email: string;
  password: string;
  passwordResetToken?: string;
  passwordResetExpires?: Date;
  tasks?: TasksModel[];
  avatar?: AvatarModel;
  level?: number;
}

export interface TasksModel {
  id?: number;
  title: string;
  description: string;
  user_id: string;
  date: Date;
}

export interface AvatarModel {
  id?: string;
  name: string;
  size: number;
  user_id: string;
  shoes_id: string;
  dresses_id: string;
  eyes_color_id: string;
  image: string;
  earrings_id: string;
  hair_id: string;
}

export interface ClothersAvatarModel {
  id?: string;
  name: string;
  image: string;
  type: ClothersType;
}

export enum ClothersType {
  SHOES = "shoes",
  DRESSES = "dresses",
  EYES_COLOR = "eyes_color",
  EARRINGS = "earrings",
  HAIR = "hair",
}

export enum ErrosBDModel {
  UNIQUE_VIOLATION = 23505,
}
