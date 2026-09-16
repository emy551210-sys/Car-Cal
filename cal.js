var brand = document.getElementById('brand')
brand.addEventListener('change',changeModel)
var model =  document.getElementById('model')
model.addEventListener('change',cal)
 var price = document.getElementById('price')
document.getElementById('downPayment').addEventListener('keyup',cal)
document.getElementById('period').addEventListener('change',cal)
var interest = document.getElementById('interest')

function changeModel()
{
        if (brand.value == "Hyundai")
         {
        model.innerHTML = `
            <option value="">Select Model</option>
            <option value="Elantra">Elantra</option>
            <option value="Tucson">Tucson</option>
            <option value="Accent">Accent</option>
        `
       }
 else if (brand.value === "Toyota")
{
    model.innerHTML = `
        <option value="">Select Model</option>
        <option value="Corolla">Corolla</option>
        <option value="Camry">Camry</option>
        <option value="Yaris">Yaris</option>
    `
}
else if (brand.value == "Kia")
{
    model.innerHTML = `
        <option value="">Select Model</option>
        <option value="Sportage">Sportage</option>
        <option value="Cerato">Cerato</option>
        <option value="Picanto">Picanto</option>
    `
}
else if (brand.value == "BMW")
{
    model.innerHTML = `
        <option value="">Select Model</option>
        <option value="X3">X3</option>
        <option value="X5">X5</option>
        <option value="320i">320i</option>
    `
}
else if (brand.value == "Mercedes")
{
    model.innerHTML = `
        <option value="">Select Model</option>
        <option value="C-Class">C-Class</option>
        <option value="E-Class">E-Class</option>
        <option value="GLC">GLC</option>
    `
}
}



function cal()
{
//price
if (model.value == "Elantra")
{
    price.value = 900000
}
else if (model.value == "Tucson")
{
    price.value = 1200000
}
else if (model.value == "Accent")
{
    price.value = 800000
}

else if (model.value === "Corolla")
{
    price.value = 1200000
}
else if (model.value == "Camry")
{
    price.value = 1800000
}
else if (model.value == "Yaris")
{
    price.value = 950000
}

else if (model.value == "Sportage")
{
    price.value = 1500000
}
else if (model.value == "Cerato")
{
    price.value = 1000000
}
else if (model.value == "Picanto")
{
    price.value = 750000
}

else if (model.value == "X3")
{
    price.value = 2500000
}
else if (model.value == "X5")
{
    price.value = 3500000
}
else if (model.value == "320i")
{
    price.value = 2200000
}

else if (model.value == "C-Class")
{
    price.value = 2800000
}
else if (model.value == "E-Class")
{
    price.value = 3500000
}
else if (model.value == "GLC")
{
    price.value = 3200000
}

var priceCar = price.value


// installment
 var installmentPeriod = document.getElementById('period').value

    
if (installmentPeriod == "1")
{
    interest.value = 0.10
}
else if (installmentPeriod == "2")
{
    interest.value = 0.19
}
else if (installmentPeriod == "3")
{
    interest.value = 0.32
}
else if (installmentPeriod == "4")
{
    interest.value = 0.45
}
else if (installmentPeriod == "5")
{
    interest.value = 0.51
}
else if (installmentPeriod == "7")
{
    interest.value = 0.79
}

var interestRate=interest.value

   var downPayment = document.getElementById('downPayment').value

console.log("Price:", priceCar)
console.log("Down Payment:", downPayment)


   
 if(priceCar == '' || downPayment == '' || installmentPeriod == '' || interestRate == '')
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

   else if(Number(downPayment) > Number(priceCar))
    {
        document.querySelector('.text').innerText = 'Down payment cannot be greater than car price'
    }
   
   else
   {

      var remainingValue = priceCar - downPayment
      var interestValue = remainingValue * interestRate 
      var totalInstallments =parseFloat( remainingValue) + parseFloat(interestValue)
      var totalMonths = installmentPeriod * 12
      var monthlyInstallment = totalInstallments / totalMonths

    document.querySelector('.text').innerText = parseFloat(monthlyInstallment)+ ' EGP'
          document.querySelector('.text').classList.remove('alert', 'alert-danger','text-danger')
     document.querySelector('.text').classList.add('alert', 'alert-success','text-success')

      
   }



}




