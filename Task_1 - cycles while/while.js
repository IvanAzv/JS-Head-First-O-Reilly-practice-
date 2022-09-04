let scoops = 5;
while (scoops>0) {
    document.write('Another scoop! <br>');
    if (scoops > 1) {
        document.write('Ice cream is running low!<br>');
    }
    else if (scoops == 1) {
        document.write('ouhhh its the last one!!!!<br>')
    }
    scoops = scoops - 1;
}
document.write('ouhhh, i want more ice cream')