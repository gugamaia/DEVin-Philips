import java.sql.SQLOutput;
import java.util.Scanner;

public class DesafioMedia {
    public static void main(String[] args) {
        //Calcular média de notas e imprimir se aprovado (média >= 7);
        //Exemplo:   double notas = [10, 5]; // pedir valores para o usuário
        //                   double media = …
        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite a primeira nota: ");
        double nota1 = scanner.nextDouble();

        System.out.println("Digite a segunda nota: ");
        double nota2 = scanner.nextDouble();
        double media = (nota1 + nota2) / 2;

        if (media >= 7) {
            System.out.println("Abrovado, sua média foi " + media);
        } else {
            System.out.println("Infelizmente, você não passou. Sou média é " + media);
        }

    }
}
