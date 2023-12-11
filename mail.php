<?php
    $data = $_POST;
    $name = $data['name'];
    $phone = $data['phone'];
    $text = $data['text'];
    
    $selectedTechnologies = '';
    
    foreach($technologies as $item) {
        echo "$item<br />";
        
    $selectedTechnologies .= $item . "\n";
    }
    
    $textile = $data['textile'];
    $procedures = $data['procedures'];
    $fasting = $data['fasting'];
 
    $to = "romandetkinperm@yandex.ru"; 
    $date = date ("d.m.Y"); 
    $time = date ("h:i");
    $subject = "Заявки с Лид Формы";

    $msg="
    Имя: $name;
    Телефон: $phone;
    Сообщение: $text";

    mail($to, $subject, $msg, "From: $to ");
?>