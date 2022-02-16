import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecettesService {
recetteURL:'http://localhost:3000';
  constructor(private httpCLient:HttpClient) { }
  addRecette(recette: any) {
    return this.httpCLient.post(`${this.recetteURL}/addRecette`, recette);
  }
  getAllRecettes() {
    return this.httpCLient.get<{ message: string, recettes: any }>(`${this.recetteURL}/recettes`);
  }
  getRecetteById(id: any) {
    return this.httpCLient.get<{ findedRecette: any }>(`${this.recetteURL}/getRecette/${id}`);
  }
  updateRecette(recette: any) {
    return this.httpCLient.put<{ message: string }>(`${this.recetteURL}/updateRecette/${recette._id}`, recette);
  }
  delateRcette(id: any) {
    return this.httpCLient.delete<{ message: string }>(`${this.recetteURL}/deleteById/${id}`);
  }
  searchByTitle(recette) {
    return this.httpCLient.post<{ searchedRecettes: any }>(`${this.recetteURL}/searchrecette`, recette);
  }
}
