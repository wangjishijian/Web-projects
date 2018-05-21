<script type="text/javascript">  
        var code;  
        //document.getElementById("code") = changeImg;  
        function changeImg(){  
            var arr = new Array(  
            '1','2','3','4','5','6','7','8','9','0',    
                'a','b','c','d','e','f','g','h','i','j',    
                'k','l','m','n','o','p','q','r','s','t',    
                'u','v','w','x','y','z',    
                'A','B','C','D','E','F','G','H','I','J',    
                'K','L','M','N','O','P','Q','R','S','T',    
                'U','V','W','X','Y','Z'                 
            );    
            code='';  
            //随机获得四个字符作为验证码  
            for(var i = 0;i < 4;++ i){  
                var random = parseInt(Math.random()*arr.length);  
                code += arr[random];  
            }  
            document.getElementById('code').innerHTML = code;  
        }  
  
        function check(){  
            var input = document.getElementById('icode').value;  
            if(input.toLowerCase() == code.toLowerCase()){  
                return true;  
            }else  
                alert('验证码输入不正确');  
                return false;  
        }  
              
    </script>  