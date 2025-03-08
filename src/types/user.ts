export interface TUser {
  _id:string;
  name: string;
  email: string;
  password: string;
  phone?: string;
  role: 'admin'| 'landlord' | 'tenant',
  isBlocked: boolean;
  isDeleted: boolean;
  passwordChangedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
  profileImg?: string;
}