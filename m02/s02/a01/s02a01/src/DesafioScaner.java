import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class DesafioScaner {
    public static void main(String[] args) {
        //criar lista de números de 1 a 4
        //List<Integer> codigoOpcoes = List.of(1,2,3,4);
        List<Integer> codigoOpcoes = new ArrayList<>();
        codigoOpcoes.add(1);
        codigoOpcoes.add(2);
        codigoOpcoes.add(3);
        codigoOpcoes.add(4);
        // imprimir
        System.out.println("== Menu ==");
        System.out.println("1 - Primeira opção");
        System.out.println("2 - Segunda opção");
        System.out.println("3 - Terceira opção");
        System.out.println("4 - Quarta opção");

        System.out.println();
        System.out.println("Digite a opção desejada:");

        Scanner scanner = new Scanner(System.in);
        int opcaoScanner = scanner.nextInt();

        boolean valido = codigoOpcoes.contains(opcaoScanner);

        System.out.println("A opção é válida " + valido);
    }
}
