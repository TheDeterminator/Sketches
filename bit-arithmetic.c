#include<stdio.h>

typedef char bit;
bit carry = 0;
bit halfadd( bit A, bit B ){
    carry = A & B;
    return A ^ B;
}
bit fulladd( bit A, bit B ){
    bit xor = A ^ B;
    bit ret = carry ^ xor;
    carry = (carry & xor) | (A & B);
    return ret; 
}

void fillNum( int num, bit *array ){
    for(int i = 0; i < 32; ++ i ){
        array[i] = ( num >> i ) & 1;
    }
}

int add(int A, int B)
{
    bit num1[32] = {0}, num2[32] = {0};
    fillNum(A, num1);
    fillNum(B, num2);

    int r = 0;
    bit tmp = halfadd( num1[0], num2[0] );
    // putchar( tmp ? '1' : '0' );
    r = tmp;
    for(int  i = 1; i < 32; ++i ){
        tmp = fulladd( num1[i], num2[i] );
        r += tmp << i;
        // putchar( tmp ? '1' : '0' );
    }
    // putchar( carry ? '1' : '0' );
    return r;
}

int multiply(int A, int B)
{
  int product = 0;
  for (int i = 0; i<A; i++)
  {
    product = add(product, B);
  }
  return product;
}

int main(){ 
  printf("%d\n", add(234,123));
  printf("%d", multiply(3, 2));
    return 0;
}
