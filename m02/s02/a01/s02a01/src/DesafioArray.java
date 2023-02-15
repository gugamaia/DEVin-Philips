import java.util.ArrayList;
import java.util.List;

public class DesafioArray {

    public static void main(String[] args) {

//        Implemente um código que localize os elementos que aparece somente uma vez no array
//        abaixo, enquanto os demais aparecem repetidos.
//        Imprima ao final os elementos que não se repetem.

        int[] arr = {3, 5, 1, 4, 7, 6, 5, 2, 3, 4, 2, 3, 1, 0, 6};
        List<Integer> unicos = new ArrayList<>();

        for(int i=0; i < arr.length; i++) {
            boolean repetido = false;
            int nro = arr[i];
            for(int j=0; j < arr.length; j++) {
                if (j == i)
                    continue;
                if (nro == arr[j]) {// repetiu
                    repetido = true;
                    break;
                }
            }
            if (!repetido)
                unicos.add(nro);
        }
        for(Integer n : unicos) {
            System.out.println(n);
        }

    }

}
