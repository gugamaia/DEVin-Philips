public class AulaCondicionais {
    public static void main(String[] args) {
        int idade = 27;
        if (idade >= 18) {
            System.out.println("Maior de idade");
        }else {
            System.out.println("Menor de idade");
        }

        String cor = "Azul";

        switch (cor) {
            case "Azul":
                System.out.println("Cor do céu!");
                break;
            case "Verde":
                System.out.println("Cor das plantas!");
                break;
            case "Dourado":
                System.out.println("Cor do ouro!");
                break;
            default:
                System.out.println("Outra cor");
        }

    }
}
