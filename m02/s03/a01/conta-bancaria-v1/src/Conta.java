public class Conta {
    String dono;
    Double saldo;

    public Boolean depositar(Double valor){
        if(valor<0){
            System.out.println("Sr(a). " + dono + " o Valor depositado é negativo");

            return false;
        }
        saldo+=valor;
        return true;
    }
    public Boolean retirar(Double valor){
        if(valor>saldo) {
            System.out.println("Sr(a). " + dono + " o Saldo é de Insuficiente, saldo atual: R$" + saldo);
            return false;
        }
        saldo -= valor;
        System.out.println("Sr(a). " + dono + " o Valor sacado é de R$"+ valor+ ", saldo atual: R$"+ saldo);
        return true;
    }

    public Boolean transferir(Double valor, Conta contaDestino){
        this.retirar(valor);
        contaDestino.depositar(valor);
        
    }
}
