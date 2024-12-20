export class GlobalConstants {
  // Message

  public static genericError: string = 'Algo deu errado tente mais tarde!';

  public static unauthroized: string = 'Você não tem autorização para acessar!';

  public static productExistError: string = "Este producto já existe"

  public static productAdded: string = "Produto adicionado com sucesso."

  // REGEX

  public static priceRegex: string = '[0-9.]*';

  public static nameRegexWithAccents: string = '[a-zA-ZÀ-ÿ0-9 ]*';

  public static nameRegex: string = '[a-zA-Z0-9 ]*';

  public static emailRegex: string =
    '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';

  public static contactNumberRegex: string = '^[e0-9]{11,11}$';

  // VARIABLE

  public static error: string = 'error';
}
