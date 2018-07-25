var seats =[];
var total = 0;
var set = 0;
Array.prototype.remove = function(from, to) {
    var rest = this.slice((to || from) + 1 || this.length);
    this.length = from < 0 ? this.length + from : from;
    return this.push.apply(this, rest);
};
function mySeatA1(x,p)
{
    for(var i=0;i<=seats.length;i++)
    {
        if(seats[i] == x)
        {
            t =total;
            t = parseInt(t)-parseInt(p);
            total=t;
            seats.remove(i);
            document.getElementById("s_seat").innerHTML = seats;
            document.getElementById("money").innerHTML = total;
            set = 1;
        }
    }
   
    if((set == 0)||(seats.length == 0))
    {
        var t =total;
        t = parseInt(t)+ parseInt(p);
        total=t;
        seats.push(x);
        document.getElementById("s_seat").innerHTML = seats;
        document.getElementById("money").innerHTML = total;
        set = 0;
    }
    set=0;
}
$(document).ready(function(){
    $('.A1').click(function(){
        $('.A1').toggleClass('seat main');
      });
    $('.seat').mouseenter(function(){
        pri = $(this).attr("price");
        $(this).text(pri);
    });
    $('.seat').mouseleave(function(){
        pri = $(this).attr("id");
        $(this).text(pri);
    });
    $('.seat').click(function(){
        $(this).toggleClass('seat main');
      });
});
function myfun()
{
    var resp = confirm("You have booked "+seats.length+" tickets. Your fare is " + total + " .Do you want to proceed.");
    if(resp)
    {
        alert("Your Ticket is booked. Sucessfully..!!")
    }
}