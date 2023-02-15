public class Main {
    public static void main(String[] args) {
        Conta conta1 = new Conta();
        conta1.dono = "Gustavo JV Maia";
        conta1.saldo = 198303.26;

        if(conta1.depositar(-100.10)){
            System.out.println("Saldo adicionado com sucesso");
        }
        System.out.println("R$" + conta1.saldo);


        if(conta1.retirar(1000.10)){
            System.out.println("Saldo retirado com sucesso");
        }
        System.out.println("R$" + conta1.saldo);

    }


}
