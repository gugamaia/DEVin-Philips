import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class Atividade3 {
    public static void main(String[] args) {
       int[] numeros = new int[5];
       numeros[0] = 1;
       numeros[1] = 2;
       numeros[2] = 3;
       numeros[3] = 4;
       numeros[4] = 5;
        System.out.println( Arrays.toString(numeros));

    List<Integer> lista = new ArrayList<>();
    lista.add(5);
    lista.add(6);
    lista.add(7);
    lista.add(8);
    lista.add(9);
    lista.add(10);
        System.out.println(lista);
    }
}
