import * as crypto from 'crypto';

export class User {
  id: number
  type: string
  attributes: {
    name: string
    email: string
    apiKey: string
  }
  constructor(data: any){
    this.id = data.id;
    this.type = 'user'
    this.attributes = {
      name: data.name,
      email: data.email,
      apiKey: crypto.randomUUID()
    }
  }
}
