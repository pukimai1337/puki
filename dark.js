		function salin() {
			var textarea = document.getElementById('content');
			textarea.select();
			document.execCommand('copy');
			textarea.setSelectionRange(0, 0);
			get('Successfully!! to copy text', '#5cb85c');
		}

		function get(pesan, warna) {
			var notifikasi = document.createElement('div');
			notifikasi.textContent = pesan;
			notifikasi.style.position = 'fixed';
			notifikasi.style.bottom = '20px';
			notifikasi.style.left = '20px';
			notifikasi.style.padding = '10px';
			notifikasi.style.borderRadius = '4px';
			notifikasi.style.zIndex = '1';
			notifikasi.style.opacity = '0';
			notifikasi.style.color = '#fff';
			notifikasi.style.backgroundColor = warna;
			document.body.appendChild(notifikasi);

			var opacity = 0;
			var fadeInInterval = setInterval(function() {
				opacity += 0.1;
				notifikasi.style.opacity = opacity.toString();
				if (opacity >= 1) {
					clearInterval(fadeInInterval);
					setTimeout(function() {
						var fadeOutInterval = setInterval(function() {
							opacity -= 0.1;
							notifikasi.style.opacity = opacity.toString();
							if (opacity <= 0) {
								clearInterval(fadeOutInterval);
								document.body.removeChild(notifikasi);
							}
						}, 30);
					}, 3000);
				}
			}, 30);
		}

		$(document).ready(function() {
			$('.date-btn').click(function() {
				var itemName = $(this).data('item');
				var fileContent = $(this).data('file-content');
				$('input[name="nd"]').val(fileContent);
				$('#dinn').text(itemName);
				$('#dipp').val(itemName);
				$('#mdtw').modal('show');
			})

			$('.p-btn').click(function() {
				var itemName = $(this).data('item');
				var fileContent = $(this).data('file-content');
				$('input[name="np"]').val(fileContent);
				$('#pin').text(itemName);
				$('#pip').val(itemName);
				$('#mp').modal('show');
			})

			$('.r-btn').click(function() {
				var itemName = $(this).data('item');
				$('input[name="nn"]').val(itemName);
				$('#rin').text(itemName);
				$('#rinn').val(itemName);
				$('#mr').modal('show');
			});

			$('.d-btn').click(function() {
				var itemName = $(this).data('item');
				$('#din').text(itemName);
				$('#dip').val(itemName);
				$('#md').modal('show');
			});
		});

		document.getElementById('ups').addEventListener('change', function() {
			var label = document.getElementById('uputama');
			if (this.files && this.files.length > 0) {
				if (this.files.length === 1) {
					var z = this.files[0].name;
					if (z.length > 11) {
						z = z.substring(0, 8) + '...';
					}
					label.textContent = z;
				} else {
					label.textContent = this.files.length + ' file';
				}
			} else {
				label.textContent = 'Select';
			}
		});