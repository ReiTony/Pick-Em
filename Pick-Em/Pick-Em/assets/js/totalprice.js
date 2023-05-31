var totalPrice = document.getElementById("totalPrice");
	var overallPrice = 0;
	
	function total(price)
	{
		overallPrice += price;
		document.getElementById("totalPrice").value = overallPrice;
	}
	
	function cpuPriceUpdate() {
		var cpuName = document.getElementById("cpuName").value;
		var cpuStore = document.getElementById("cpuStore");
		var cpuPrice = document.getElementById("cpuPrice");
		var cpuCount = document.getElementById("cpuCount");
		total(-(parseInt(cpuPrice.value)));
		for (var x = 0; x < cpuListById.length; x++) {
			if (cpuName == cpuListById[x].id) {
				if(cpuStore.value === "x")
					cpuPrice.value = 0;
				if(cpuStore.value === "dq")
					cpuPrice.value = cpuListById[x].dq * cpuCount.value;
				if (cpuStore.value === "hub")
					cpuPrice.value = cpuListById[x].hubPrice * cpuCount.value;	
				
				var sockets = cpuListById[x].socket;
				changeMoboList('mobo' + sockets);
			}
		}
		total(parseInt(cpuPrice.value));
	}
	
	function changeMoboList(sockets)
	{
		var socketAM3P = document.getElementsByClassName('.opt .moboAM3+');
		var socketAM4 = document.getElementsByClassName('.opt .moboAM4');
		var socketLGA1151 = document.getElementsByClassName('.opt .moboLGA1151');
		var socketLGA1151v2 = document.getElementsByClassName('.opt .moboLGA1151v2');
		var socketLGA1150 = document.getElementsByClassName('.opt .moboLGA1150');
		var socketFM2P = document.getElementsByClassName('.opt .moboFM2+');
		var socketFM2 = document.getElementsByClassName('.opt .moboFM2');
		var socketTR4 = document.getElementsByClassName('.opt .moboTR4');
		var socketLGA2066 = document.getElementsByClassName('.opt .moboLGA2066');
		var socketLGA1151v3 = document.getElementsByClassName('.opt .moboLGA1151v3');
	
		var socketArray = [socketAM3P, socketAM4, socketLGA1151, socketLGA1151v2, socketLGA1151v3, socketLGA1150, socketFM2P, socketFM2, socketTR4, socketLGA2066];

		for (var x = 0; x < socketArray.length; x++)
		{
			if (sockets == socketArray[x])
				for (var i = 0; i < socketArray[x].length; i++)
				{
					socketArray[x][i].style.display = 'block';
				}
				
			else
				for (var i = 0; i < socketArray[x].length; i++)
				{
					socketArray[x][i].style.display = 'none';
				}
		}
	}
	
	function coolerPriceUpdate() {
		var coolerName = document.getElementById("coolerName").value;
		var coolerStore = document.getElementById("coolerStore");
		var coolerPrice = document.getElementById("coolerPrice");
		var coolerCount = document.getElementById("coolerCount");
		total(-(parseInt(coolerPrice.value)));
		for (var x = 0; x < coolerListById.length; x++) {
			if (coolerName == coolerListById[x].id) {
				if(coolerStore.value === "x")
					coolerPrice.value = 0;
				if(coolerStore.value === "dq")
					coolerPrice.value = coolerListById[x].dq * coolerCount.value;
				if (coolerStore.value === "hub")
					coolerPrice.value = coolerListById[x].hubPrice * coolerCount.value;
			}
		}
		total(parseInt(coolerPrice.value));
	}

	function moboPriceUpdate() {
		var moboName = document.getElementById("moboName").value;
		var moboStore = document.getElementById("moboStore");
		var moboPrice = document.getElementById("moboPrice");
		var moboCount = document.getElementById("moboCount");
		total(-(parseInt(moboPrice.value)));
		for (var x = 0; x < moboListById.length; x++) {
			if (moboName == moboListById[x].id) {
				if(moboStore.value === "x")
					moboPrice.value = 0;
				if(moboStore.value === "dq")
					moboPrice.value = moboListById[x].dq * moboCount.value;
				if (moboStore.value === "hub")
					moboPrice.value = moboListById[x].hubPrice * moboCount.value;
			}
		}	
		total(parseInt(moboPrice.value));
	}

	function ramPriceUpdate() {
		var ramName = document.getElementById("ramName").value;
		var ramStore = document.getElementById("ramStore");
		var ramPrice = document.getElementById("ramPrice");
		var ramCount = document.getElementById("ramCount");
		total(-(parseInt(ramPrice.value)));
		for (var x = 0; x < ramListById.length; x++) {
			if (ramName == ramListById[x].id) {
				if(ramStore.value === "x")
					ramPrice.value = 0;
				if(ramStore.value === "dq")
					ramPrice.value = ramListById[x].dq * ramCount.value;
				if (ramStore.value === "hub")
					ramPrice.value = ramListById[x].hubPrice * ramCount.value;
			}
		}
		total(parseInt(ramPrice.value));
	}
		
	function ssdPriceUpdate() {
		var ssdName = document.getElementById("ssdName").value;
		var ssdStore = document.getElementById("ssdStore");
		var ssdPrice = document.getElementById("ssdPrice");
		var ssdCount = document.getElementById("ssdCount");
		total(-(parseInt(ssdPrice.value)));
		for (var x = 0; x < ssdListById.length; x++) {
			if (ssdName == ssdListById[x].id) {
				if(ssdStore.value === "x")
					ssdPrice.value = 0;
				if(ssdStore.value === "dq")
					ssdPrice.value = ssdListById[x].dq * ssdCount.value;
				if (ssdStore.value === "hub")
					ssdPrice.value = ssdListById[x].hubPrice * ssdCount.value;
			}
		}	
		total(parseInt(ssdPrice.value));
	}
		
	function hddPriceUpdate() {
		var hddName = document.getElementById("hddName").value;
		var hddStore = document.getElementById("hddStore");
		var hddPrice = document.getElementById("hddPrice");
		var hddCount = document.getElementById("hddCount");
		total(-(parseInt(hddPrice.value)));
		for (var x = 0; x < hddListById.length; x++) {
			if (hddName == hddListById[x].id) {
				if(hddStore.value === "x")
					hddPrice.value = 0;
				if(hddStore.value === "dq")
					hddPrice.value = hddListById[x].dq * hddCount.value;
				if (hddStore.value === "hub")
					hddPrice.value = hddListById[x].hubPrice * hddCount.value;
			}
		}	
		total(parseInt(hddPrice.value));
	}
		
	function gpuPriceUpdate() {
		var gpuName = document.getElementById("gpuName").value;
		var gpuStore = document.getElementById("gpuStore");
		var gpuPrice = document.getElementById("gpuPrice");
		var gpuCount = document.getElementById("gpuCount");
		total(-(parseInt(gpuPrice.value)));
		for (var x = 0; x < gpuListById.length; x++) {
			if (gpuName == gpuListById[x].id) {
				if(gpuStore.value === "x")
					gpuPrice.value = 0;
				if(gpuStore.value === "dq")
					gpuPrice.value = gpuListById[x].dq * gpuCount.value;
				if (gpuStore.value === "hub")
					gpuPrice.value = gpuListById[x].hubPrice * gpuCount.value;
			}
		}	
		total(parseInt(gpuPrice.value));
	}
		
	function psuPriceUpdate() {
		var psuName = document.getElementById("psuName").value;
		var psuStore = document.getElementById("psuStore");
		var psuPrice = document.getElementById("psuPrice");
		var psuCount = document.getElementById("psuCount");
		total(-(parseInt(psuPrice.value)));
		for (var x = 0; x < psuListById.length; x++) {
			if (psuName == psuListById[x].id) {
				if(psuStore.value === "x")
					psuPrice.value = 0;
				if(psuStore.value === "dq")
					psuPrice.value = psuListById[x].dq * psuCount.value;
				if (psuStore.value === "hub")
					psuPrice.value = psuListById[x].hubPrice * psuCount.value;
			}
		}	
		total(parseInt(psuPrice.value));
	}
		
	function casePriceUpdate() {
		var caseName = document.getElementById("caseName").value;
		var caseStore = document.getElementById("caseStore");
		var casePrice = document.getElementById("casePrice");
		var caseCount = document.getElementById("caseCount");
		total(-(parseInt(casePrice.value)));
		for (var x = 0; x < caseListById.length; x++) {
			if (caseName == caseListById[x].id) {
				if(caseStore.value === "x")
					casePrice.value = 0;
				if(caseStore.value === "dq")
					casePrice.value = caseListById[x].dq * caseCount.value;
				if (caseStore.value === "hub")
					casePrice.value = caseListById[x].hubPrice * caseCount.value;
			}
		}	
		total(parseInt(casePrice.value));
	}	

	$(document).ready( function () {
		$('#dataTable').DataTable({
			"lengthMenu": [ [10, 20, 30, -1], [10, 20, 30, "All"] ]
		});
	} );	