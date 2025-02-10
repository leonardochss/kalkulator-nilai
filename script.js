
        let lastNilaiAkhir = null;

        function hitungNilai() {
            let uts = parseFloat(document.getElementById('uts').value) || 0;
            let uas = parseFloat(document.getElementById('uas').value) || 0;
            let tugas = parseFloat(document.getElementById('tugas').value) || 0;
            let quiz = parseFloat(document.getElementById('quiz').value) || 0;
            let proyek = parseFloat(document.getElementById('proyek').value) || 0;
            let partisipatif = parseFloat(document.getElementById('partisipatif').value) || 0;
            
            let bobotUts = parseFloat(document.getElementById('bobotUts').value) || 0;
            let bobotUas = parseFloat(document.getElementById('bobotUas').value) || 0;
            let bobotTugas = parseFloat(document.getElementById('bobotTugas').value) || 0;
            let bobotQuiz = parseFloat(document.getElementById('bobotQuiz').value) || 0;
            let bobotProyek = parseFloat(document.getElementById('bobotProyek').value) || 0;
            let bobotPartisipatif = parseFloat(document.getElementById('bobotPartisipatif').value) || 0;
            
            let totalBobot = bobotUts + bobotUas + bobotTugas + bobotQuiz + bobotProyek + bobotPartisipatif;
            if (totalBobot === 0) {
                alert("Total bobot tidak boleh 0!");
                return;
            }
            
            let nilaiAkhir = ((uts * bobotUts) + (uas * bobotUas) + (tugas * bobotTugas) + 
                             (quiz * bobotQuiz) + (proyek * bobotProyek) + (partisipatif * bobotPartisipatif)) / totalBobot;
            nilaiAkhir = parseFloat(nilaiAkhir.toFixed(2));
            
            if (nilaiAkhir === lastNilaiAkhir) {
                alert("Harap Masukkan Nilai Yang berbeda!");
                return;
            }
            lastNilaiAkhir = nilaiAkhir;
            
            let grade;
            if (nilaiAkhir > 85) grade = "A";
            else if (nilaiAkhir > 80) grade = "A-";
            else if (nilaiAkhir > 75) grade = "B+";
            else if (nilaiAkhir > 70) grade = "B";
            else if (nilaiAkhir >= 65) grade = "C";
            else if (nilaiAkhir >= 50) grade = "D";
            else grade = "E";
            
            let resultText = `<strong>Hasil untuk ${document.getElementById('mataKuliah').value}:</strong><br>
                 Nilai Akhir: ${nilaiAkhir}<br>
                 Grade: ${grade}`;
            document.getElementById('hasil').innerHTML = resultText;
            
            let historyDiv = document.getElementById('history');
            historyDiv.innerHTML += `<p>${resultText}</p>`;
        }
        
        function toggleHistory() {
            let historyContainer = document.getElementById('history-container');
            historyContainer.style.display = historyContainer.style.display === 'none' ? 'block' : 'none';
        }