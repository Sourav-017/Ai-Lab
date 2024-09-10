#include<bits/stdc++.h>
using namespace std;

int flor[3];
int pos = 0;
int operations = 0;

void mov_left();
void mov_right();
void clean();

void init()
{
     if(flor[pos])
     {
          clean();
     }

}

void mov_right()
{
     operations++;
     cout << "\n pos : " << pos << " Moved right" << endl << endl;;
     pos++;
     init();
}

void mov_left()
{
     operations++;
     cout << "\n pos : " << pos << " Moved left" << endl << endl;;
     pos--;
     init();
}
void clean()
{
     cout << "\n floor tiles :" << pos << " cleaned" << endl << endl;;
     operations++;
}



int main()
{
     cout << "Enter the condition of tiles 1 : ";
     cin >> flor[1];

     cout << "\nEnter the condition of tiles 2 : ";
     cin >> flor[2];

     cout << "\nEnter the position of cleaner (1 for left) (2 for right) : ";
     cin >> pos;

     init();

     if(pos == 1)
     {
          mov_right();
     }
     else if(pos == 2)
     {
          mov_left();
     }
     cout << "\nTotal no of operations :" << operations << endl << endl;

}
