public class Atividade2 {
    public static void main(String[] args) {
        String[][] multicores = {
                {"vermelho", "preto","branco"},
                { "roxo", "azul", "amarelo" }
        };
        int tamanhoMulticores = multicores.length;
        int tamanhoCoresPrimeiro = multicores[0].length;

        System.out.println("O primeiro do primeiro array elemento é " + multicores[0][0]);
        System.out.println("O primeiro do segundo array elemento é " + multicores[1][0]);
        System.out.println("O tamanho do array é " + tamanhoMulticores);
        System.out.println("O tamanho do array é " + tamanhoCoresPrimeiro);


    }
}
