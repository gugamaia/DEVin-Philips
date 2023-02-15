public class Main {
    public static void main(String[] args) {
        int nota1 = 10;
        int nota2 = 9;
        int nota3 = 8;

        int[] notas = { 10, 9, 8 };
        System.out.println(notas[2]);

        String[] nomes = { "Gustavo", "Jose", "Valerio", "Maia"};
        System.out.println("Nome é " + nomes[1] + ".");

        int tamanhoDoArray = nomes.length;
        System.out.println(tamanhoDoArray);

        String[][] turmas = {
                {"james", "scott", "spock", "star treck"},
                {"luke", "obi-wan", "han solo", "star wars"},
                {"tyran", "sansa", "cercei", "game of thrones"}
        };


    }
}
