import java.util.Scanner;

public class DesafioIMC {
    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);
        System.out.println("Digite seu peso, lembre de utilizar vírgula. Ex: 78,4 ");
        double peso = scanner.nextDouble();

        System.out.println("Digite sua altura, Ex: 1,80: ");
        double altura = scanner.nextDouble();
        double IMC = (peso / ( altura * altura ));

        if(IMC < 18.5) {
            System.out.println("Seu IMC é de " + IMC + ", vou é classificado como MAGREZA.");
        } else if (IMC < 25) {
            System.out.println("Seu IMC é de " + IMC + ", vou é classificado como NORMAL.");
        } else if (IMC < 30) {
            System.out.println("Seu IMC é de " + IMC + ", vou é classificado como SOBREPESO.");
        } else if (IMC < 40) {
            System.out.println("Seu IMC é de " + IMC + ", vou é classificado como OBESIDADE.");
        } else {
            System.out.println("Seu IMC é de " + IMC + ", vou é classificado como OBESODADE GRAVE.");

        }
    }
}
