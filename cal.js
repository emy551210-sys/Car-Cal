document.getElementById('brand').addEventListener('keyup',cal)
document.getElementById('year').addEventListener('keyup',cal)
document.getElementById('price').addEventListener('keyup',cal)
document.getElementById('downPayment').addEventListener('keyup',cal)
document.getElementById('period').addEventListener('keyup',cal)
document.getElementById('interest').addEventListener('keyup',cal)

function cal()
{
   

   var priceCar = document.getElementById('price').value
   var downPayment = document.getElementById('downPayment').value
   var installmentPeriod = document.getElementById('period').value
   var interestRate = document.getElementById('interest').value
   
   if(priceCar=='' || downPayment=='' || installmentPeriod=='' || interestRate=='')
   {
           document.querySelector('.text').innerText = 'Please complete all required fields'
          document.querySelector('.text').classList.add('alert', 'alert-danger','text-danger')
    }
   else if(priceCar <= 0)
    {
       document.querySelector('.text').innerText = 'Car price must be greater than 0'

    }

    else if(downPayment <= 0)
    {
        document.querySelector('.text').innerText = 'Down payment must be greater than 0'
    }

    else if(interestRate <= 0)
    {
        document.querySelector('.text').innerText = 'Interest rate must be greater than 0'
    }

    else if(downPayment > priceCar)
    {
        document.querySelector('.text').innerText = 'Down payment cannot be greater than car price'
    }
   
   else
   {

      var remainingValue = priceCar - downPayment
      var interestValue = remainingValue * (interestRate /100)
      var totalInstallments =parseFloat( remainingValue) + parseFloat(interestValue)
      var totalMonths = installmentPeriod * 12
      var monthlyInstallment = totalInstallments / totalMonths

    document.querySelector('.text').innerText = parseFloat(monthlyInstallment)+ ' EGP'
     document.querySelector('.text').classList.remove('alert', 'alert-danger','text-danger')
     //document.querySelector('.text').classList.add('alert', 'alert-dark','text-dark')
     document.querySelector('.text').classList.add('alert', 'alert-success','text-success')

      
   }



}



