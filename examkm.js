app.get("/konversipanjang/:tipe/:panjang", (req,res) => 
{
    let tipe = req.params.tipe
    let panjang = Number(req.params.panjang)
    let response
    let km,hm,dam,m,dm,cm,mm

    if (tipe === "mm") 
    {
        mm = panjang
        cm = panjang /  10
        dm = panjang / 100
        m = panjang / 1000
        dam = panjang / 10000
        hm = panjang / 100000
        km = panjang / 1000000
        response = {
            Konversi: "MiliMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "cm")
    {
        mm = panjang * 10
        cm = panjang
        dm = panjang / 10
        m = panjang / 100
        dam = panjang / 1000
        hm = panjang / 10000
        km = panjang / 100000
        response = {
            Konversi: "CentiMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "dm")
    {
        mm = panjang * 100
        cm = panjang * 10
        dm = panjang
        m = panjang / 10
        dam = panjang / 100
        hm = panjang / 1000
        km = panjang / 10000
        response = {
            Konversi: "DesiMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "m")
    {
        mm = panjang * 1000
        cm = panjang * 100
        dm = panjang * 10
        m = panjang 
        dam = panjang / 10
        hm = panjang / 100
        km = panjang / 1000
        response = {
            Konversi: "Meter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "dam")
    {
        mm = panjang * 10000
        cm = panjang * 1000
        dm = panjang * 100
        m = panjang * 10
        dam = panjang
        hm = panjang / 10
        km = panjang / 100
        response = {
            Konversi: "DekaMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "hm")
    {
        mm = panjang / 100000
        cm = panjang / 10000
        dm = panjang / 1000
        m = panjang / 100
        dam = panjang / 10
        hm = panjang
        km = panjang * 10
        response = {
            Konversi: "HektaMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }
    else if(tipe === "km")
    {
        mm = panjang / 1000000
        cm = panjang / 100000
        dm = panjang / 10000
        m = panjang / 1000
        dam = panjang / 100
        hm = panjang / 10
        km = panjang
        response = {
            Konversi: "KiloMeter",
            mm: mm,
            cm: cm,
            dm: dm,
            m: m,
            dam: dam,
            hm: hm,
            km: km
        }
    }

    res.json(response)
})