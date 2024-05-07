export interface IUser {
    id: string;
    name: string;
    lastName: string;
    typeDocumentId: 'Cédula de Ciudadanía' | 'Cédula de Extranjería' | 'Pasaporte';
    documentId: string;
    email: string;
    password: string;
    isAceptedConditions: boolean;
}