<?php

    $serveur = "localhost";
    $dbname = "mydb";
    $user = "root";
    $pass = "root";
    
    


    try{
        
        $dbco = new PDO("mysql:host=$serveur;dbname=$dbname",$user,$pass);
        $dbco->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
        
        $sth = $dbco->prepare("
            INSERT INTO user(firstname, lastname, birth, nationality ,whySurvey)
            VALUES(:firstname, :lastname, :birth, :nationality ,:whySurvey)");
        $sth->bindParam(':firstname',$_POST["firstname"]);
        $sth->bindParam(':lastname',$_POST["lastname"]);
        $sth->bindParam(':birth',$_POST["birth"]);
        $sth->bindParam(':nationality',$_POST["nationality"]);
        $sth->bindParam(':whySurvey',$_POST["whySurvey"]);
        $sth->execute();
        
        
        header("location:testpage1.html");
    }
    catch(PDOException $e){
        echo 'Impossible de traiter les données. Erreur : '.$e->getMessage();
    }
?>